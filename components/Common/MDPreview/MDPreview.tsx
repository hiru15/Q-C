import createDOMPurify from 'dompurify';
import { marked } from 'marked';

export type MDPreviewProps = {
  value: string;
};

export const MDPreview = ({ value = '' }: MDPreviewProps) => {
  const DOMPurify = createDOMPurify(window);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(value)),
      }}
    />
  );
};
