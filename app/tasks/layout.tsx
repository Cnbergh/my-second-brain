import Sidebar from '@/components/sidebar/sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function TasksPageLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <main className="container">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border">
        <ResizablePanel defaultSize={10}>
          <div className="flex h-full items-center justify-center p-6">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>
          <div className="flex flex-wrap h-full items-center justify-center p-6">
            <section className="py-6">{props.children}</section>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
