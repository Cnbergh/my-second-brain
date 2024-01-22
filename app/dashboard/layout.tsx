export default function DashboardLayout(props: {
  children: React.ReactNode;
  tasks: React.ReactNode;
  habitswellbeing: React.ReactNode;
  journal: React.ReactNode;
}) {
  return (
    <main className="container">
      <section className="py-6">{props.children}</section>
      <section className="flex gap-6">
        {props.tasks}
        {props.habitswellbeing}
        {props.journal}
      </section>
    </main>
  );
}
