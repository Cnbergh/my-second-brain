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
    <main className="w-full min-h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border">
        <ResizablePanel defaultSize={10}>
          <div className="flex h-full max-w-[80px] p-6">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>
          <div className="flex flex-col h-full items-center justify-center p-6">
            <section className='w-full text-start'>{props.children}</section>
            <section>{props.tasks}</section>
            <section className="flex flex-wrap gap-6">
              {props.habitswellbeing}
              {props.journal}
            </section>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
