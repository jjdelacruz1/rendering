
function renderTweets(tweets) {
    let final = tweets.map(createTweet).join("")
    return `
        <div class="text-center mt-5">
            <div>${final}</div>
        </div>
    `
}

function createTweet(tweet) {
    return `<div>
              <div class="top-section" style="display:flex">
                <img src='${tweet.user.profilePic}' style="width:75px">
                    <div flex-column>
                    <div class="nameAndCheck" style="display:flex; font-size: 23px; font-weight: bold"> 
                        <div>${tweet.user.username}</div>
                        <div>${tweet.user.isVerified}</div>
                    </div>
                    <div class="handle">
                        <div>${tweet.user.handle} </div>
                    </div>
                </div>
              </div>

              <div>
                <div>${tweet.text}</div>
                <div class="footer">
                  ${tweet.replies}
                  ${tweet.retweets}
                  ${tweet.likes}

            </div>
            </div>
            `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}