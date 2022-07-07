import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";
import '../styles/repositories.scss'


export function RepositoryList() {

    interface Repository {
        name: string;
        description: string;
        html_url: string;
    }

    const [respositories, setRepositories] = useState<Repository[]>([])

    useEffect(()=> {
        async function callApiRepositories(){
            const response = await fetch("https://api.github.com/users/kauan777/repos")
            const data = await response.json();
            setRepositories(data)

        }
        callApiRepositories();

    }, [])

    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {respositories.map((repository) => {
                    return(
                        <RepositoryItem 
                            key={repository.name} 
                            repository={repository}
                            />
                    )
                })}
            </ul>
        </section>
    )
}