// **Optioneel**: HomePage roept `GET /api/me` aan; bij 401 → redirect naar `/login`.

import '../style.css';
import WelcomeComponent from "../components/WelcomeComponent.tsx";

/*export default function HomePage() {
      const user = auth ? JSON.parse(auth) : null;*/
export default function HomePage() {
    const raw = localStorage.getItem('userInfoRes');
  let user: { email: string; displayName?: string } | null = null;
    if (raw && raw !== 'undefined' && raw !== 'null') {
        try {
            user = JSON.parse(raw);
        } catch {
            user = null;
        }
    }




    return (
        <div className="layout">
            <WelcomeComponent loggedInUser={user}/>
        </div>
    );
}
