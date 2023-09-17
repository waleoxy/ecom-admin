import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-6">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
