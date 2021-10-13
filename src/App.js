// Develop a small app that shows a list of all JavaScript repos on Github, sorted by number of stars.
//     Requirements:
// * List's columns: name, url (link), owner, forks, open issues.
// * Should have pagination on scroll
// * Should show loader when data is being loaded.
// * Should look nice and have some styling
// * Please, store sources in a public repo (bitbucket, github, gitlab)
// * Have a live version of an app deployed via netlify
//
// Note:
//     * You can use GitHub API for that (https://api.github.com)
// * Use React.js. Any flavor you're comfortable with.
// * You can use any other libraries (but no UI libries like Vuetify/Element/Material as we want to see custom styling).
// * We expect you to do this at first attempt and spend no more than 4 hours.


import axios from 'axios'
import {useEffect, useRef, useState} from "react";
import RepoDetails from "./RepoDetails";
import {Table} from 'reactstrap'


function App() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        setRepos([]);
        getData();
    }, [])

    function getData() {
        axios({
            method: "get",
            url: `https://api.github.com/search/repositories`,
            params: {sort: 'stars', q: 'javascript', page: 1, limit: 60}
        })
            .then(res => {
                setLoading(false);
                setRepos(res.data.items)
            })
            .catch(err => err)
    }

    return (
        <div>
            <h3>Github repositories</h3>
            <Table size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Owner</th>
                    <th>Forks</th>
                    <th>Open Issues</th>
                </tr>
                </thead>
                    {repos.map(el => <RepoDetails key={el.id} repo={el} loading={loading}/>)}
            </Table>
        </div>
)
}

export default App;