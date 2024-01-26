import { RefObject } from "react";
import { AboutParagraph, AboutAnchorHeader } from "./styled_components";

function Statement(props: { statementRef: RefObject<HTMLHeadingElement> }) {
  return (
    <section>
      <AboutAnchorHeader id="statement" ref={props.statementRef}>
        A Statement from Walter Cassidy
      </AboutAnchorHeader>
      <AboutParagraph>
        The key to this walking tour is basic. It is about local visibility of
        the 2SLGBTQAI community. Unfortunately, much of that visibility has been
        erased for various reasons. Some of those reasons are as simple as the
        suppression of our identities, the lack of interest in who we are,
        overall hate or ignorance, and our own lack of seeing the importance of
        our stories and struggles.
        <br />
        <br />
        When creating the tour, some of the examples were difficult to prove if
        they “really” were queer, trans, or gender non-conforming references,
        especially before the 1960s. I included them anyways because one could
        argue either way if the experience was queer, trans, or gender
        non-conforming.
        <br />
        <br />
        I must acknowledge the hard work and dedication of the Windsor Essex
        Rainbow Alliance (WERA). WERA is a group of individuals whose goals are
        to institute a method of collecting, preserving, and disseminating the
        local history of the 2SLGBTQIA+ community and to establish a permanent
        public monument that will showcase the struggles, achievements, and
        celebrations of the local 2SLGBTQIA+ community for all in Windsor/Essex
        and beyond to visit, learn from, and enjoy. There are still so many
        voices, stories, and places that have not been told and could be lost
        forever. It is my goal to help change that reality.
        <br />
        <br />
        If you have any materials (newsletters, pictures, posters, buttons,
        shirts, etc.) you would like to have preserved or if you find any
        information that is not included in this tour and would like to make a
        request for an update or something changed, please contact me{" "}
        <a href="mailto:wequeerhistory@mdirect.net">by email</a>.
      </AboutParagraph>
    </section>
  );
}

export default Statement;
