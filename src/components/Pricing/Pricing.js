import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiPostStamp, GiLightBulb } from 'react-icons/gi';
import { GiLoveLetter, GiCalendar } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingHeading,
	PricingContainer,
	PricingCard,
	PricingCardInfo,
	PricingCardIcon,
	PricingCardPlan,
	PricingCardCost,
	PricingCardLength,
	PricingCardFeatures,
	PricingCardFeature,
} from './Pricing.elements';

const Pricing = () => {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
			<PricingSection>
				<PricingWrapper>
					<PricingHeading>Our Services</PricingHeading>
					<PricingContainer>
						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiCalendar />
								</PricingCardIcon>
								<PricingCardPlan>Content Calendars</PricingCardPlan>
								<PricingCardCost>$36</PricingCardCost>
								<PricingCardLength>per week</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Plan content schedules</PricingCardFeature>
									<PricingCardFeature>Complete in 1 week</PricingCardFeature>
									{/* <PricingCardFeature>24/7 Support</PricingCardFeature> */}
								</PricingCardFeatures>
								<Button primary>Contact</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiLightBulb />
								</PricingCardIcon>
								<PricingCardPlan>Strategy Planning</PricingCardPlan>
								<PricingCardCost>$32</PricingCardCost>
								<PricingCardLength>per day</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Align Strategy and Goal</PricingCardFeature>
									<PricingCardFeature>Complete in 1-2 weeks</PricingCardFeature>
									{/* <PricingCardFeature>24/7 Support</PricingCardFeature> */}
								</PricingCardFeatures>
								<Button primary>Contact</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiLoveLetter />
								</PricingCardIcon>
								<PricingCardPlan>Web Content</PricingCardPlan>
								<PricingCardCost>$99</PricingCardCost>
								<PricingCardLength>per 500/words</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Write compelling stories</PricingCardFeature>
									<PricingCardFeature>Complete in 1 week</PricingCardFeature>
									{/* <PricingCardFeature>24/7 Support</PricingCardFeature> */}
								</PricingCardFeatures>
								<Button primary>Contact</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiPostStamp />
								</PricingCardIcon>
								<PricingCardPlan>Profile Optimization</PricingCardPlan>
								<PricingCardCost>$33</PricingCardCost>
								<PricingCardLength>per hour</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Enhance Profile Impact</PricingCardFeature>
									{/* <PricingCardFeature>Zoom Meeting</PricingCardFeature> */}
									<PricingCardFeature>Complete in 2-3 days</PricingCardFeature>
								</PricingCardFeatures>
								<Button primary>Contact</Button>
							</PricingCardInfo>
						</PricingCard>
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
};

export default Pricing;
