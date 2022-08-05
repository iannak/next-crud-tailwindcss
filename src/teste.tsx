import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
}

export function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/franzannakarolina/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
        <h1>Repos</h1>
        <input type="text" name="search" />
        <ul>
            {repos.map((repo) => (
                <li key={repo.name}>
                    <a href={`
                    https://github.com/${repo.name}`}>{repo.name}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}