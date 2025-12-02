import '../style.css'
import {useNavigate} from "react-router-dom";
import UserCreationComponent from "../components/UserCreationComponent.tsx";
import {createUser} from "../lib/api.ts";
import {useSnackbar} from "../components/SnackbarContext.tsx";


export default function CreateUserPage() {
    const navigate = useNavigate();
    const {showMessage} = useSnackbar();

    const handleUserCreation = async (email: string, displayName: string, role: string) => {
        try {
            const response = await createUser(email, displayName, role);
            if (!response) {
                throw new Error('Invalid response from server');
            }
            showMessage("User creation successful!", "success")

            navigate ('/home')

        } catch (err) {
            console.error('[signup] failed', err);
            if (err instanceof Error) {
                throw err;
            }
            throw new Error('Creation failed');
        }

    }
    return (
        <div className="layout">
            <div className="auth-card">
                <h1 className="brand-title">New user</h1>
                <p className="brand-subtitle">
                    Add new people to your team.
                </p>
                <UserCreationComponent onSubmit={handleUserCreation} />
            </div>
        </div>
    )
}