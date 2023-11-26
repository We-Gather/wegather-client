import { TagWord, TagWrapper } from './style';

interface Props {
  id: number;
  text: string;
}

export default function TagGray({ text }: Props) {
  return (
    <TagWrapper>
      <TagWord>{text}</TagWord>
    </TagWrapper>
  );
}
