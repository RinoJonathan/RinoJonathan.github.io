// icon:bxl-git | Boxicons https://boxicons.com/ | Atisa
import * as React from "react";

function GitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 00-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 011.939 1.95l2.214 2.217a1.53 1.53 0 011.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 01-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 010 2.166 1.536 1.536 0 01-2.174 0 1.528 1.528 0 010-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 01-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 001.821 0l8.69-8.689a1.284 1.284 0 00.003-1.822" />
    </svg>
  );
}

export default GitIcon;
