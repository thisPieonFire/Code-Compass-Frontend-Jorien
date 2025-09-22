
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

type Json = Record<string, unknown>;

export class ApiError extends Error {
    status: number;
    details?: unknown;
    constructor(message: string, status: number, details?: unknown) {
        super(message);
        this.status = status;
        this.details = details;
    }
}


async function request<T>(path: string, init?: RequestInit & { json?: Json }) {
    const { json, headers, ...rest } = init || {};

    console.debug('[api] request', {
        url: `${BASE_URL}${path}`,
        method: rest?.method || 'GET',
        body: json ?? null,
    });

    const res = await fetch(`${BASE_URL}${path}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            ...(json ? { 'Content-Type': 'application/json' } : {}),
            ...(headers || {}),
        },
        body: json ? JSON.stringify(json) : undefined,
        ...rest,
    });
    const contentType = res.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');

    let data: unknown = null;
    try {
        data = isJson ? await res.json() : await res.text();
    } catch {
        // ignore body parse errors
    }

    if (!res.ok) {
        const serverMsg =
            (isJson && data && typeof data === 'object' && (data as any).message) ||
            (isJson && data && typeof data === 'object' && (data as any).error) ||
            res.statusText ||
            `HTTP ${res.status}`;

        console.error('[api] error', {
            url: `${BASE_URL}${path}`,
            status: res.status,
            message: serverMsg,
            details: data,
        });

        throw new ApiError(serverMsg, res.status, data);
    }

    console.debug('[api] response', {
        url: `${BASE_URL}${path}`,
        status: res.status,
        data: isJson ? data : '[text]',
    });

    return data as T;
}


export function login(email: string, password: string) {
    return request<{ user: { email: string, displayName: string},}>(
        '/api/login',
        { method: 'POST', json: { email, password } }
    );
}

export function logout() {
    return request<void>(
        '/api/logout',
        { method: 'POST' });
}

export function createUser(email: string, displayName: string, password: string, role: string) {
    return request<{ user: { email: string, displayName: string},}>(
        '/api/users',
        { method: 'POST', json: { email, displayName, password, role } }
    );
}

export function me() {
    return request<{ id: string; role: string; displayName?: string }>(
        '/api/me',
        { method: 'GET'});
}
