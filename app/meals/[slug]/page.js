export default function DishComponent({ params }) {
    console.log(params);
    return <h1>Hot dish coming soon! {params.slug}</h1>
}