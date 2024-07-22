import {NextUIProvider} from "@nextui-org/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";

export default function Home() {
  return (
    <NextUIProvider>
      <ResizablePanelGroup
      direction="vertical"
      className="min-h-screen min-w-screen"
    >
      <ResizablePanel defaultSize={8}>
        <div className="flex h-full items-center justify-center p-6 ">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={92}>
        <div className="flex h-full items-center justify-center p-6 ">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </NextUIProvider>
  );
}
