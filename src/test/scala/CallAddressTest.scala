import io.gatling.core.Predef.{RawFileBody, atOnceUsers, bodyString, scenario}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef.{http, status}

class CallAddressTest extends Simulation{

  // Jenkins parameterisation
  def userCount: Int = System.getProperty("USERS", "100").toInt
  def rampUser: Int = System.getProperty("RAMP_USERS", "3000").toInt
  def rampDuration: Int = System.getProperty("RAMP_DURATION", "5").toInt

  val baseUrl = "http://localhost:8080/"
  val appendedUrl = "address"

  var fails:Int = 0
  // http Conf
  val httpConf = http.baseUrl(baseUrl)
    .header("Content-Type", "application/json")

  // Scenario
  val scn = scenario("Order-Place-ServiceFlow")
    .exec(http("CreateAddressRequest")
      .post(appendedUrl)
      .body(RawFileBody("data/heimAddresse.json"))
      .check(status.is(200))
    )
    .exec {
      session =>
        println(session("responseData").as[String])
        session
    }
    .exec {
      session =>
        if (session.isFailed) {
          fails += 1
        }
        session
    }

  // Setup method
  //setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf)
  setUp(scn.inject(rampUsers(rampUser) during(rampDuration))).protocols(httpConf)
}
