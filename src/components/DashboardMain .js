import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from '@mui/icons-material/Feedback';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { CircularProgress, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// Sample Data for the Chart
const data = [
  { name: '1', uv: 4000 },
  { name: '2', uv: 3000 },
  { name: '3', uv: 2000 },
  { name: '4', uv: 2780 },
  { name: '5', uv: 1890 },
  { name: '6', uv: 2390 },
  { name: '7', uv: 3490 },
  { name: '8', uv: 2780 },
  { name: '9', uv: 2000 },
  { name: '10', uv: 3490 },
  { name: '11', uv: 3000 },
  { name: '12', uv: 2780 },
  { name: '13', uv: 2000 },
  { name: '14', uv: 2390 },
  { name: '15', uv: 3490 },
  { name: '16', uv: 2780 },
  { name: '17', uv: 3000 },
  { name: '18', uv: 2000 },
  { name: '19', uv: 3490 },
  { name: '20', uv: 3000 },
  { name: '21', uv: 2780 },
  { name: '22', uv: 2000 },
  { name: '23', uv: 2390 },
  { name: '24', uv: 3490 },
  { name: '25', uv: 2780 },
  { name: '26', uv: 3000 },
  { name: '27', uv: 2000 },
  { name: '28', uv: 2390 },
  { name: '29', uv: 3490 },
  { name: '30', uv: 2780 },
];

// Container for the entire dashboard
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #1d1d1d;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
`;

// Container for Summary Cards
const SummaryCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: nowrap; /* Disable wrapping to keep cards in the same row */
  overflow-x: auto; /* Allow horizontal scrolling on smaller screens */
`;

// Individual Summary Card
const SummaryCard = styled.div`
  // background-color: #333;
    background-color: #282828;
  padding: 15px;
  border-radius: 10px;
  flex: 1;
  min-width: calc(18% - 10px); /* Each card should take approximately 20% of the available width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px); /* Slight lift on hover for a modern effect */
  }

  @media (max-width: 1024px) {
    min-width: calc(25% - 10px); /* Slight adjustment for medium screens */
  }

  @media (max-width: 768px) {
    min-width: calc(50% - 10px); /* Adjust for smaller screens */
  }

  @media (max-width: 480px) {
    min-width: calc(100% - 10px); /* Full width for very small screens */
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  svg {
    font-size: 2.5rem;
  }
`;

// Feedback Container to align with Recent Orders
const FeedbackContainer = styled.div`
  flex: 1;
  background-color: #282828;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FeedbackItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeedbackText = styled.div`
  margin-left: 10px;
`;

const StarWrapper = styled.div`
  display: flex;
  color: #ffd700;
`;

// Right Side Card to be used for Goals
const RightSideCard = styled.div`
  background-color: #282828;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Individual List Item in Goals
const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

// Circle Icon for each item in Goals
const CircleIcon = styled.div`
  background-color: ${props => props.color || 'grey'};
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

// Container for Activity and Goals, placed in the same row
const ChartGoalsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Chart Card for Activity
const ChartCard = styled.div`
  background-color: #282828;
  padding: 20px;
  border-radius: 10px;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Header for the Chart
const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;


// Dropdown for selecting chart view
const Dropdown = styled.select`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
`;

// Sample avatar URLs (replace these with actual URLs or paths to avatar images)
const avatars = {
  "Wade Warren": "https://example.com/avatars/wade.jpg",
  "Jane Cooper": "https://example.com/avatars/jane.jpg",
  "Guy Hawkins": "https://example.com/avatars/guy.jpg",
  "Jenny Wilson": "https://example.com/avatars/jenny.jpg",
  "Cody Fisher": "https://example.com/avatars/cody.jpg",
  "Savannah Nguyen": "https://example.com/avatars/savannah.jpg",
};



// Container for Recent Orders and Customer Feedback
const OrdersFeedbackContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RecentOrdersContainer = styled.div`
  flex: 1;
  background-color: #282828;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border-bottom: 1px solid #555;
    padding: 8px;
    text-align: left;
    color: #ffffff;
  }
  
  td.avatar-cell {
    display: flex;
    align-items: center;
  }

  td.avatar-cell .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

// Component for Circular Progress with Text
const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex" alignItems="center" justifyContent="center">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;
// Dashboard Main Component
const DashboardMain = () => {
  return (
    <DashboardContainer>
      {/* Summary Cards Section */}
      <SummaryCardContainer>
        <SummaryCard>
          <IconWrapper>
            <ShoppingCartIcon style={{ color: 'blue' }} />
          </IconWrapper>
          <h4>Total Orders</h4>
          <b><h2>75</h2></b>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <LocalShippingIcon style={{ color: 'green' }} />
          </IconWrapper>
          <h4>Total Delivered</h4>
          <b><h2><p>70</p></h2></b>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <CancelIcon style={{ color: 'red' }} />
          </IconWrapper>
          <h4>Total Cancelled</h4>
          <b><h2><p>05</p></h2></b>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            <AttachMoneyIcon style={{ color: 'gold' }} />
          </IconWrapper>
          <h4>Total Revenue</h4>
          <b><h2><p>$12k</p></h2></b>
        </SummaryCard>
        <SummaryCard>
          <IconWrapper>
            {/* <TrendingUpIcon style={{ color: 'purple' }} /> */}
          </IconWrapper>
          <h3>Net Profit</h3>
          <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
            <b><h2><p style={{ marginBottom: '10px' }}>$6759.25</p></h2></b>
            <CircularProgressWithLabel value={70} size={60} thickness={4} />
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '5px' }}>
              <span style={{ color: '#00FF00' }}>▲ 3%</span> increase from last month
            </Typography>
          </Box>
        </SummaryCard>
      </SummaryCardContainer>

      {/* Activity and Goals Section */}
      <ChartGoalsContainer>
         <ChartCard>
      <ChartHeader>
        <Title>Activity</Title>
        <Dropdown>
          <option value="monthly" selected>Monthly</option>
          <option value="weekly" >
            Weekly
          </option>
          <option value="daily">Daily</option>
        </Dropdown>
      </ChartHeader>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Bar dataKey="uv" fill="#5567FF" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
        <RightSideCard>
          <h3>Goals</h3>
          <ListItem>
            <CircleIcon color="#FF6B6B">
              <EmojiEventsIcon />
            </CircleIcon>
            <span>Goals</span>
          </ListItem>
          <ListItem>
            <CircleIcon color="#4ECDC4">
              <RestaurantMenuIcon />
            </CircleIcon>
            <span>Popular Dishes</span>
          </ListItem>
          <ListItem>
            <CircleIcon color="#5567FF">
              <MenuBookIcon />
            </CircleIcon>
            <span>Menus</span>
          </ListItem>
        </RightSideCard>
      </ChartGoalsContainer>

      {/* Recent Orders and Customer Feedback Section */}
      <OrdersFeedbackContainer>

        <RecentOrdersContainer>
          <h3>Recent Orders</h3>
          <OrdersTable>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(avatars).map(([name]) => {
                // Define possible statuses
                const statuses = ['Completed', 'Cancelled', 'Pending'];

                // Randomly select a status
                const statusIndex = Math.floor(Math.random() * statuses.length);
                const status = statuses[statusIndex];

                // Define color based on status
                const color = status === 'Completed' ? 'green' : status === 'Cancelled' ? 'red' : 'orange';

                return (
                  <tr key={name}>
                    <td className="avatar-cell">
                      <AccountCircleIcon />
                      {name}
                    </td>
                    <td>{Math.floor(Math.random() * 1000000)}</td>
                    <td>${(Math.random() * 500).toFixed(2)}</td>
                    <td>
                      <button style={{ color }}>{status}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </OrdersTable>
        </RecentOrdersContainer>
        <FeedbackContainer>
          <Typography variant="h6" gutterBottom>
            Customer Feedback
          </Typography>
          <FeedbackItem>
            <AccountCircleIcon style={{ color: '#4caf50' }} /> {/* Updated icon */}
            <FeedbackText>
              <Typography variant="body2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Wade Warren
              </Typography>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarWrapper>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                Great service! Loved the product.
              </Typography>

            </FeedbackText>
          </FeedbackItem>

          <FeedbackItem>
            <AccountCircleIcon style={{ color: '#4caf50' }} /> {/* Updated icon */}
            <FeedbackText>
              <Typography variant="body2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Jenny Wilson
              </Typography>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon style={{ color: 'white' }} />
              </StarWrapper>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                Quick delivery and amazing quality!
              </Typography>

            </FeedbackText>
          </FeedbackItem>

          <FeedbackItem>
            <AccountCircleIcon style={{ color: '#4caf50' }} /> {/* Updated icon */}
            <FeedbackText>
              <Typography variant="body2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Cody Fisher
              </Typography>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon style={{ color: 'white' }} />
              </StarWrapper>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                Satisfied with the purchase, would recommend.
              </Typography>

            </FeedbackText>
          </FeedbackItem>

          <FeedbackItem>
            <AccountCircleIcon style={{ color: '#4caf50' }} /> {/* Updated icon */}
            <FeedbackText>
              <Typography variant="body2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Guy Hawkins
              </Typography>
              <StarWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon style={{ color: 'white' }} />
              </StarWrapper>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                Good product but took time to deliver.
              </Typography>

            </FeedbackText>
          </FeedbackItem>
        </FeedbackContainer>
      </OrdersFeedbackContainer>
    </DashboardContainer>
  );
};

export default DashboardMain;
