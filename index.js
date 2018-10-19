const userName = ''
const linkApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues(data) {
  fetch(`${linkApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
    } )
  })
}

function showIssues(json) {
  $('#issues').append(json.template())
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
