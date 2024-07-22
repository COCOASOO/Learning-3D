import {NextUIProvider} from "@nextui-org/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Header from "@/components/Header";

export default function Home() {
  return (
    <NextUIProvider>
      <ResizablePanelGroup
      direction="vertical"
      className="min-h-screen min-w-screen"
    >
      <ResizablePanel defaultSize={8}>
        <div className="flex h-full">
          <Header/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={92}>
        <div className="flex h-full">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </NextUIProvider>
  );
}
