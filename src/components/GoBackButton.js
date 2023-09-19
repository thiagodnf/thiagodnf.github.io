import { useRouter } from "next/navigation";

export default function GoBackButton() {

    const router = useRouter();

    return (
        <button className="btn btn-sm btn-success me-3" onClick={() => router.back()}>
            <i className="bi bi-chevron-left me-1"></i>Back
        </button>
    );
}
