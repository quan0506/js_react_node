export default function Course() {
  const courses = [
    {
      name: "js",
      price: "100"
    },
    {
      name: "html",
      price: "50"
    },
    {
      name: "css",
      price: "10"
    },
  ];

  return (
    <div>
      <ul>
        {courses.map((course, index) => {
          return (
            course.price > 40 ? (
              <li key={index}> name: {course.name}, price: {course.price} </li>
            ) : null
          );
        })}
      </ul>
    </div>
  );
}
