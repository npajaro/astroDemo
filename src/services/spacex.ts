import { type APISpaceXResponse, type Doc } from '../types/apiResponse';


export const gestLaunchBy = async ({id}: {id: string}) => {

    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launch = (await res.json()) as Doc;
    console.log(launch)
    return launch;
}

export const gestLatestLaunches = async () => {

    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 20
            },
        }),
    });

    const {docs: launches} = await res.json() as APISpaceXResponse;
    return launches;
}

export const fetchData = async () => {

    const appToken = 'pJlPCoZd28UvUvd8cxjDE6eG3';
    const url = `https://www.datos.gov.co/resource/fs36-azrv.json?$limit=5000&$$app_token=${appToken}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(`Retrieved ${data.length} records from the dataset!`);
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
  }