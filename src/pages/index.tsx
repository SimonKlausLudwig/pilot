import React from 'react';
import {InjectedIntlProps, injectIntl,} from 'gatsby-plugin-intl';
import {PageBanner} from "~/components/PageBanner";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <div>
      <PageBanner title={"Hello"} subtitle={"Good Luck!"} button={{text: "Button Text"}}/>
    </div>
  );
};

export default injectIntl(Index);
