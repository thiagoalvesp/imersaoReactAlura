import React from 'react';
import { useRouter } from 'next/router';

function QuizPage() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <p>
      Quiz -
      {name}
    </p>
  );
}

export default QuizPage;
