import styled from 'styled-components';
import Container from 'components/Container';
import { EnvVars } from 'env';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Компания',
    items: [
      { title: 'Услуги', href: '/features' },
      { title: 'Форматы работы', href: '/pricing' },
    ],
  },
  {
    title: 'Ресурсы',
    items: [{ title: 'Блог', href: '/blog' }],
  },
  {
    title: 'Контакты',
    items: [{ title: EnvVars.EMAIL, href: 'mailto:' + EnvVars.EMAIL }],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <Copyright>&copy; Copyright {new Date().getFullYear()} AI Engineering</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <a href={href}>{title}</a>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  ${media('<=tablet')} {
    margin-bottom: 3rem;
  }
`;

const ListHeader = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ListItemWrapper = styled.div`
  margin-bottom: 1.5rem;

  & > a {
    font-size: 1.6rem;
    opacity: 0.8;
    transition: opacity 0.2s ${'' /* ${p.theme.animation.easeQuadOut} */};

    &:hover {
      opacity: 1;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(var(--textSecondary), 0.2);
`;

const Copyright = styled.p`
  font-size: 1.6rem;
  opacity: 0.6;
`;
