declare module 'react-native-markdown-package' {
  import * as React from 'react';
  import { Constructor } from 'react-native';
  class MarkdownComponent extends React.Component<any> {}
  const MarkdownBase: MarkdownComponent & Constructor<any>;
  class Markdown extends MarkdownComponent {}
  export default Markdown;
}
