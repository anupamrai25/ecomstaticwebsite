import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ProductItem({ imgSrc, title, price, stock }) {
  return (
    <Card sx={{ width: 280, maxWidth: '100%', boxShadow: 'lg', m: 5 }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={imgSrc}
            srcSet={`${imgSrc}&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Bluetooth Headset</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
        >
          {title}
        </Link>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {price} THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}

export default function ProductCard() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        gap: '16px', 
      }}
    >
      <ProductItem
        imgSrc="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
        title="Super Rockez A400"
        price={2900}
        stock={7}
      />
      <ProductItem
  imgSrc="https://static.jazp.com/assets/subcategory/eff6229f1808dd548647a2ad3594833c.jpg"
  title="Super Rockez A400"
  price={2900}
  stock={7}
/>
<ProductItem
  imgSrc="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
  title="Super Rockez A400"
  price={2900}
  stock={7}
/>

      <ProductItem
        imgSrc="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60"
        title="Super Rockez A400"
        price={2900}
        stock={7}
      />
    </div>
  );
}
