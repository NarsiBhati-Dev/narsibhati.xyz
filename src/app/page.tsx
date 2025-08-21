import Container from "@/components/container";
import GitHubContributions from "@/components/GitHubContributions";

export default function Home() {
  return (
    <main className=" flex flex-col items-centre justify-centre">
      <Container>
        <h1 className="text-4xl font-bold">Narsi Bhati</h1>
        <GitHubContributions />
      </Container>
    </main>
  );
}
