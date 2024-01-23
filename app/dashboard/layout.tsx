import Sidebar from '@/components/sidebar/sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function DashboardLayout(props: {
  children: React.ReactNode;
  tasks: React.ReactNode;
  habitswellbeing: React.ReactNode;
  journal: React.ReactNode;
}) {
  return (
    <main className="container">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border">
        <ResizablePanel defaultSize={10}>
          <div className="flex h-full p-6">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>
          <div className="flex flex-wrap h-full items-center justify-center p-6">
            <section className="py-6">{props.children}</section>
            <section className="flex gap-6">
              {props.tasks}
              {props.habitswellbeing}
              {props.journal}
            </section>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
