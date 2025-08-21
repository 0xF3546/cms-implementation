import { useEffect } from "react";
import { useCMS } from "myheadless-react";

export default function HomePage() {
    const cms = useCMS();

    useEffect(() => {
        cms.loadPageData("596020db-193d-4b19-815e-d02d50126ffd");
        return () => {
            cms.cleanUp();
        }
    }, [cms]);

    return (
        <>
            <h1>About</h1>
            <p>This is a simple CMS implementation using React and TypeScript.</p>
            {cms.pageData && (
                <>
                    <div>
                        <h2>{cms.getTextContent("cebe4c7d-823e-455d-93af-1970dae715ba")}</h2>

                        <img src={cms.getImageBlock("471670a1-00b7-4cdf-83f3-6646db4c2e55")?.imageUrl} alt={cms.getImageBlock("471670a1-00b7-4cdf-83f3-6646db4c2e55")?.altText} />
                    </div>
                    <div>
                        {cms.getTextBlockList("b1c3f8d2-4e0a-4c5b-9f6e-7d8f9c0e1a2b")?.textBlocks?.map((block) => (
                            <div key={block.id}>
                                <h3>{block.id}</h3>
                                <p>{block.content}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}