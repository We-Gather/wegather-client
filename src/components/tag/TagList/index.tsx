import { CloseButton, TagContainer, TagElementContainer, TagText } from './style';

type TagListProps = {
	tagList: string[];
	deleteFunc: (index:number) => void;
	width: string;
	height: string
}

export default function TagList({ tagList, deleteFunc, width, height }:TagListProps) {
  return (
    <TagElementContainer
      width={width}
      height={height}
    >{
        tagList.map((tag, index) => (
          <TagContainer key={index}>
            <TagText>{tag}</TagText>
            <CloseButton onClick={(e:any) => {
              e.preventDefault();
              deleteFunc(index);
            }}/>
          </TagContainer>
        ))}
    </TagElementContainer>
  );
}
