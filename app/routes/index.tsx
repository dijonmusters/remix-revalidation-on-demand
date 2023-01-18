import { useRevalidator } from "@remix-run/react";

export const loader = async () => {
  console.log("fetching data for index loader");
  return null;
};

export default function Index() {
  const revalidator = useRevalidator();

  const handleLoad = () => {
    revalidator.revalidate();
  };

  return <button onClick={handleLoad}>Load</button>;
}
