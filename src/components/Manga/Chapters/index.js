import React, { useEffect, useState } from "react";
import Paginate from "../../Paginate";
import { Container, Wrapper } from "../../styles";
import Chapter from "./Chapter";

const Chapters = (props) => {
  const { chapters } = props;
  const [selectedPage, setSelectedPage] = useState(1);

  const pageSize = 50;

  return (
    <Container>
      <Paginate
        results={chapters}
        pageSize={pageSize}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Wrapper isMobile={true}>
        {chapters
          .slice(
            selectedPage === 1 ? 0 : (selectedPage - 1) * pageSize,
            selectedPage === 1 ? pageSize : pageSize * selectedPage + 1
          )
          .map((chapter, i) => (
            <Chapter key={`chapter-${i}`} {...chapter} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Chapters;
