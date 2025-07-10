import { CMSProvider } from "./cmsContext";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <CMSProvider>
            {children}
        </CMSProvider>
    );
}