import { useEffect, useState } from "react";
import "./styles.css";

const lessons = [
  {
    id: "1",
    name: "HTML/CSS"
  },
  {
    id: "2",
    name: "JS"
  },
  {
    id: "3",
    name: "ReactJS"
  }
];

export default function appSubcrice() {
  const [lessonID, setLessonID] = useState("1");

  console.log(`lesson - ${lessonID}`);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonID}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonID}`, handleComment);
    };
  }, [lessonID]);

  return (
    <div className="App">
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonID === lesson.id ? "red" : "black" }}
            onClick={() => setLessonID(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
