import Joke from "./Joke";

const Jokes = () => {
  return (
    <>
      <Joke
        setup="My wife told me to stop impersonating a flamingo."
        punchline="I had to put my foot down."
      />
      <Joke
        setup="I went to buy some camo pants"
        punchline="but couldn’t find any."
      />
      <Joke
        setup="I failed math so many times at school,"
        punchline="I can’t even count"
      />
      <Joke
        setup="I used to have a handle on life,"
        punchline="but then it broke"
      />
      <Joke
        setup="I was wondering why the frisbee kept getting bigger and bigger,"
        punchline="but then it hit me"
      />
      <Joke setup="Money Talks." punchline="Mine always says goodbye" />
    </>
  );
};

export default Jokes;
