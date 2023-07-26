import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/btnText";
import Features from "@/components/home/Features";
import News from "@/components/home/News";
import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import WhyMe from "../components/home/WhyMe";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <Welcome />
      {/* <Features />
      <Services />
      <News />
      <WhyMe /> */}
      <main>
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />
          <h1>Server Session</h1>
          <pre>{JSON.stringify(session)}</pre>
        </div>
      </main>
    </main>
  );
}
