interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
} 

export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description || "(Esse repositório não tem descrição)"}</p>
            <a href={repository.html_url}>
                Acessar repositório
            </a>
        </li>
    );
}