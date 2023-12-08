import { useEffect, useState } from 'react'
import { content1 } from '../../../utils/content'
import { ExpandableCard } from '../../atoms'
import { PlanSlider } from '../../organism'
import { Plan } from '../../../services'
import { PlanServerData } from '../../../types'
import { GetStarted, HaveQuestions, HomeWelcomeSection, ProudAbout, SocialSection, VirtualPropertyBenifits } from '../../molecules'
import { AllPlanView } from '../../organism/all-plan-view'

export const AllPlan = () => {
  window.scrollTo(0, 0);
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
  
    <AllPlanView loader={loader} planDetail={planDetail} />
    
  </>)
}