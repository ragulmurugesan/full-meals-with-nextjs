import Link from "next/link";
import classes from "./meals.module.css";

export default function Home() {

  console.log('Home');

  return (
    <main className={classes.main}>
      <h1>Welcome to the Next JS Cafe</h1>
    </main>
  );
}
