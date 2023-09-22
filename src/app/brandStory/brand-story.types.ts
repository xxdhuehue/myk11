import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Brand story
export type BrandStoryProps = {
    fileds: {
        title: Field<string>;
        image: ImageField;
        description: Field<string>;
    }
}

// Brand Story Layout
export type BrandStoryList = {
    brandStorys: BrandStoryProps[]
}


// BrandStoryDetailItem
export type BrandStoryDetailItemProps = {
    fileds: {
        pageTitle: Field<string>
         subTitle: Field<string>;
        Image: ImageField;
        Description: Field<string>;
    }
} 