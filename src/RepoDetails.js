import React from 'react';


function RepoDetails({repo, loading}) {
    if (loading) {
        return (
            <h1 className="loader">Loading...</h1>
        )
    }

    return (
        <tbody>
        <tr>
            <th scope="row"></th>
            <td><img src={repo.owner.avatar_url} alt="avatar"/></td>
            <td>{repo.full_name}</td>
            <td><a href={repo.url}>{repo.url}</a></td>
            <td>{repo.owner.login}</td>
            <td>{repo.forks}</td>
            <td>{repo.open_issues}</td>
        </tr>
        </tbody>

    );
};

export default RepoDetails;