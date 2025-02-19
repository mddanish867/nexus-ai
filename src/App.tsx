import SimpleBarChart from "./components/analysis/BarChart"
import SimpleChart from "./components/analysis/Chart"
import { CodeOptimizationOverview } from "./components/analysis/CodeOptimizationOverview"
import { CodeSmellsAnalysis } from "./components/analysis/CodeSmellsAnalysis"
import { Login } from "./components/auth/Login"
// import { MFAPopup } from "./components/auth/MFAPopup"
import { Register } from "./components/auth/Register"
import { ActivityFeed } from "./components/dashboard/ActivityFeed"
import { SummaryMetrics } from "./components/dashboard/MetricCard"
import { Navbar } from "./components/dashboard/Navbar"
import { ProjectOrgSwitcher } from "./components/dashboard/ProjectOrgSwitcher"
import { DocumentationGenerator } from "./components/document/DocumentationGenerator"
import ErrorBoundary from "./components/ErrorBoundary"
import Home from "./components/home/Home"
import { Loader } from "./components/Loader"
import { CreateProject } from "./components/projects/CreateProject"
import { ProjectList } from "./components/projects/ProjectList"
import { AnalyticsDashboard } from "./components/reports/AnalyticsDashboard"
import { CustomReportGenerator } from "./components/reports/CustomReportGenerator"
import { RepositoryList } from "./components/repository/RepositoryList"
import { NotificationsSettings } from "./components/settings/NotificationsSettings"
import { RepositoryIntegration } from "./components/settings/RepositoryIntegration"
import { UserManagement } from "./components/settings/UserManagement"
import { UnitTestGenerator } from "./components/testing/UnitTestGenerator"
import { UnitTestSummary } from "./components/testing/UnitTestSummary"

function App() {
  return (
  <>
   <Home/>
   <CodeOptimizationOverview/>
   <SimpleChart/>
   <SimpleBarChart/>
   <CodeSmellsAnalysis/>
   <Login/>
   <Register/>
   {/* <MFAPopup/> */}
   <ActivityFeed/>
   <Navbar/>
   <ProjectOrgSwitcher/>
   <SummaryMetrics/>
   <DocumentationGenerator/>
   <CreateProject/>
   <ProjectList/>
   <AnalyticsDashboard/>
   <CustomReportGenerator/>
   <RepositoryList/>
   <NotificationsSettings/>
   <RepositoryIntegration/>
   <UserManagement/>
   <UnitTestGenerator/>
   <UnitTestSummary/>
   <ErrorBoundary/>
   <Loader/>
  </>
  )
}

export default App

