import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiPostStamp, GiLightBulb } from 'react-icons/gi';
import { GiPhotoCamera, GiVideoCamera } from 'react-icons/gi';
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
									<GiVideoCamera />
								</PricingCardIcon>
								<PricingCardPlan>Video Edit</PricingCardPlan>
								<PricingCardCost>$60</PricingCardCost>
								<PricingCardLength>per 30 minutes</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Complete in 3-6 days</PricingCardFeature>
									<PricingCardFeature>Output: MP4, MOV, AVI</PricingCardFeature>
									<PricingCardFeature>24/7 Support</PricingCardFeature>
								</PricingCardFeatures>
								<Button primary>Purchase</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiPostStamp />
								</PricingCardIcon>
								<PricingCardPlan>Photoshop</PricingCardPlan>
								<PricingCardCost>$15</PricingCardCost>
								<PricingCardLength>per photo</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Complete in 1-2 days</PricingCardFeature>
									<PricingCardFeature>Output: JPG, PNG, RAW</PricingCardFeature>
									<PricingCardFeature>24/7 Support</PricingCardFeature>
								</PricingCardFeatures>
								<Button primary>Purchase</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiPhotoCamera />
								</PricingCardIcon>
								<PricingCardPlan>Photography</PricingCardPlan>
								<PricingCardCost>$30</PricingCardCost>
								<PricingCardLength>per hour</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Email for appointment</PricingCardFeature>
									<PricingCardFeature>Output: JPG, PNG, RAW</PricingCardFeature>
									<PricingCardFeature>24/7 Support</PricingCardFeature>
								</PricingCardFeatures>
								<Button primary>Purchase</Button>
							</PricingCardInfo>
						</PricingCard>

						<PricingCard to='/sign-up'>
							<PricingCardInfo>
								<PricingCardIcon>
									<GiLightBulb />
								</PricingCardIcon>
								<PricingCardPlan>Photography Advice</PricingCardPlan>
								<PricingCardCost>$25</PricingCardCost>
								<PricingCardLength>per hour</PricingCardLength>
								<PricingCardFeatures>
									<PricingCardFeature>Email for appointment</PricingCardFeature>
									<PricingCardFeature>Zoom Meeting</PricingCardFeature>
									<PricingCardFeature>24/7 Support</PricingCardFeature>
								</PricingCardFeatures>
								<Button primary>Purchase</Button>
							</PricingCardInfo>
						</PricingCard>
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
};

export default Pricing;
