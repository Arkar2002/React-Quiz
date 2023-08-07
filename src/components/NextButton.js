function NextButton({ answer, dispatch, numQuestions, index }) {
  if (answer === null) return;

  return (
    <>
      {numQuestions - 1 === index ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finished
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </>
  );
}

export default NextButton;
