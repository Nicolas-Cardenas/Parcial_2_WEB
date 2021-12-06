import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import * as d3 from "d3";

function Pie(props) {
  let canva = React.createRef();

  useEffect(() => {
    let data = props.data;
    let svg = d3
      .select(canva.current)
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .append("g")
      .attr("transform", "translate(" + 300 / 2 + "," + 300 / 2 + ")");

    let color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.value))
      .range(d3.schemeSet1);

    let pie = d3.pie().value((d) => d.value);
    let dataProccessed = pie(data);

    let arc = d3.arc().innerRadius(0).outerRadius(140);

    let tooltip = d3
      .select(canva.current)
      .append("div")
      .attr("class", "tooltip")
      .style("background-color", "yellow")
      .style("border", "solid")
      .style("border-width", "3px")
      .style("border-radius", "6px")
      .style("padding", "6px");

    function mouse(d) {
      tooltip.style("opacity", 1);
      d3.select(this).style("stroke", "black").style("opacity", 1);
    }

    function mover(d) {
      tooltip
        .html(
          d.srcElement.__data__.data.name +
            ": " +
            d.srcElement.__data__.data.value +
            " KwH"
        )
        .style("left", (3 * 300) / 6 + "px")
        .style("top", 300 / 4 + "px");
    }

    function dejar(d) {
      tooltip.style("opacity", 0);
      d3.select(this).style("stroke", "black").style("opacity", 0.5);
    }

    svg
      .selectAll("mySlices")
      .data(dataProccessed)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function (d) {
        return color(d.value);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 1)
      .on("mouseover", mouse)
      .on("mousemove", mover)
      .on("mouseleave", dejar);
  }, []);

  return (
    <div className="col">
      <h2>
        <FormattedMessage id="Stats" />
      </h2>
      <div>
        <h5>
          <FormattedMessage id="PowerUsage" />
        </h5>
      </div>
      <div ref={canva} viewBox="0 0 300 300"></div>
    </div>
  );
}

export default Pie;
