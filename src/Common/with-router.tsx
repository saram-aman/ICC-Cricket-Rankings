import React, { ComponentType } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Location, Path } from 'history'
import { Params } from "react-router"

interface RouterProps {
    location: Location
    navigate: (path: Path) => void
    params: Params
}

interface WithRouterProps {
    router: RouterProps
}

function withRouter<P extends object>(
    Component: ComponentType<P & WithRouterProps>
): ComponentType<P> {
    function ComponentWithRouterProp(props: P) {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()

        const routerProps = { location, navigate, params }
        const propsWithRouter = { ...props, router: routerProps }

        return <Component {...propsWithRouter} />
    }
    return ComponentWithRouterProp
}

export default withRouter