// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./Author.module.scss";

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles["author"]}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles["author__photo"]}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <div className={styles["author__bio"]}>
      <div dangerouslySetInnerHTML={{ __html: author.fullbio }} />
    </div>
  </div>
);

export default Author;
