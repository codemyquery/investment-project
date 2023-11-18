import { useEffect, useState } from 'react'
import { content1 } from '../../../utils/content'
import { ExpandableCard } from '../../atoms'
import { PlanSlider } from '../../organism'
import { Plan } from '../../../services'
import { PlanServerData } from '../../../types'
import { GetStarted, HaveQuestions, HomeWelcomeSection, ProudAbout, SocialSection, VirtualPropertyBenifits } from '../../molecules'
export const HomePage = () => {
  const [loader, setLoader] = useState<boolean>(true)
  const [planDetail, setPlanDetail] = useState<PlanServerData[]>([])
  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      const response = await Plan.fetchPlanList('', abortController);
      setPlanDetail(response.rows);
      setLoader(false)
    }
    init();
  }, []);
  return (<>
    <HomeWelcomeSection />
    <VirtualPropertyBenifits />
    <ProudAbout />
    <GetStarted />
    {/* Plan Will be shown here */}
    <PlanSlider loader={loader} planDetail={planDetail} />
    {/* End Plan Show */}
    <HaveQuestions />
    <SocialSection />
  </>)
}