import { toBn, banglaToday } from "@/lib/format";

export default function Home() {
  return (
    <div className="p-10">
      <p>{banglaToday()}</p>
      <p>{toBn(1850)} টাকা</p>
      <button className="btn btn-primary">Test</button>
    </div>
  );
}