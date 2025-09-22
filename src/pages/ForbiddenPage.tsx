import '../style.css'

export default function ForbiddenPage() {
    return (
        <div className="errorLayout">
            <div className="auth-card">
                <h1 className="brand-title">Nope</h1>
                <p className="brand-subtitle">
                    You don't have access to this page.
                </p>

            </div>

        </div>
    )
}